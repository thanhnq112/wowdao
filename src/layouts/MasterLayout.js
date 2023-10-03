import Header from "./Header";

export default function MasterLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                <div id="container" className="layout">
                    {children}
                </div>
            </main>
        </>
    );
};
