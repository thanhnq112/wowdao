import Auroras from "@/components/Auroras";

export default function SlideLayout({
    children,
    showAuroras = false
}) {
    return (
        <div className="slide-layout">
            {showAuroras && (<Auroras />)}
            {children}
        </div>
    );
};
