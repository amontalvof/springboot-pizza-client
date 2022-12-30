interface IRenderIfProps {
    isTrue: boolean;
    children: JSX.Element;
}

export const RenderIf = ({ isTrue, children }: IRenderIfProps) => {
    if (isTrue) {
        return children;
    }
    return null;
};
