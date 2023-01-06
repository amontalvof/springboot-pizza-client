import { Form, Formik } from 'formik';
import React, { useContext, useRef } from 'react';
import { FormattedNumber } from 'react-intl';
import { GREEN, LIGHT_BLACK } from '../../constants/colors';
import useClickOutside from '../../hooks/useClickOutside';
import IProduct from '../../types/product';
import Button from '../button';
import InputText from '../inputText';
import { validationSchema } from './validation';
import {
    Close,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Title,
} from './styles';
import useCreateOrder from '../../hooks/useCreateOrder';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StorageCartContext } from '../../context/storageCart';

interface IPaymentModalProps {
    total: number;
    products: IProduct[];
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IValues {
    customer: string;
    phone: string;
    address: string;
}

const PaymentModal = ({
    total,
    products,
    isOpenModal,
    setIsOpenModal,
}: IPaymentModalProps) => {
    const {
        reducers: { resetCart },
    } = useContext(StorageCartContext);
    const navigate = useNavigate();
    const { mutate } = useCreateOrder();

    const handleSubmit = (values: IValues, { resetForm }: any) => {
        const data = {
            ...values,
            total: Number(total.toFixed(2)),
            products,
        };
        mutate(data, {
            onSuccess: (resp) => {
                resetForm();
                setIsOpenModal(false);
                if (resp.errorMessages) {
                    toast.error('There was an error creating the order.', {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: 'dark',
                    });
                } else {
                    resetCart();
                    navigate(`/order/${resp.id}`);
                }
            },
            onError: (err) => {
                resetForm();
                setIsOpenModal(false);
            },
        });
    };

    const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useClickOutside(modalRef, () => {
        setIsOpenModal(false);
    });

    return (
        <Modal isOpenModal={isOpenModal}>
            <ModalContent ref={modalRef}>
                <Formik
                    initialValues={{
                        customer: '',
                        phone: '',
                        address: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {() => (
                        <Form noValidate>
                            <ModalHeader>
                                <Close onClick={() => setIsOpenModal(false)}>
                                    ×
                                </Close>
                                <Title>
                                    You will pay{' '}
                                    <FormattedNumber
                                        value={total}
                                        // eslint-disable-next-line react/style-prop-object
                                        style="currency"
                                        currency="USD"
                                    />{' '}
                                    after delivery.
                                </Title>
                            </ModalHeader>
                            <ModalBody>
                                <InputText
                                    type="text"
                                    label="Customer"
                                    name="customer"
                                    placeholder="John Doe"
                                    required
                                />
                                <InputText
                                    type="text"
                                    label="Phone Number"
                                    name="phone"
                                    placeholder="+1 234 567 8900"
                                    required
                                />
                                <InputText
                                    type="text"
                                    label="Address"
                                    name="address"
                                    placeholder="Elton St. 505 NY"
                                    required
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    text="ORDER NOW"
                                    gradient={[LIGHT_BLACK, GREEN]}
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        marginTop: '0px',
                                    }}
                                />
                            </ModalFooter>
                        </Form>
                    )}
                </Formik>
            </ModalContent>
        </Modal>
    );
};

export default PaymentModal;
