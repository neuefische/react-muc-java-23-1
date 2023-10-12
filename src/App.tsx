import './App.css'
import HelloWorld from "./HelloWorld.tsx";

// .ts = (Reine) Logik rein
// .tsx = Template = Eine Datei wo Dinge zu sehen sind (im Browser)
// Diese Funktion ist eine Komponente
export default function App() {

    return (
        <>
            {/* Muss importiert werden*/}
           <HelloWorld name={"Jaro"} />
           <HelloWorld name={"Dirk"} />
           <HelloWorld name={"Mathias"} />
           <HelloWorld name={"Tobi"} />
           <HelloWorld name={"Ziyang"} />
           <HelloWorld name={"Sergej"} />
        </>
    )
}
