import "./styles/css/style.css"
import "./styles/js/script"

const App = () => {
    return (
        <body>
            <main className="wrapper">
                <main className="cloud-surface-sml">
                    <section class="inner-cloud-sml"></section>
                </main>
                <main className="cloud-surface">
                    <section className="inner-cloud"></section>
                </main>
                <main className="lightning"></main>
                <main className="rain-container"></main>
            </main>
        </body>
        )
}

export default App;