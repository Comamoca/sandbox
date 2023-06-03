import { Head } from "minista"
import "../../dist/style.css"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

export default function () {
  return (
    <>
      <Head>
        <title>Hello!</title>
      </Head>

      <div className="m-3 drawer-content">
        <label for="drawer" className="btn drawer-button">
          三
        </label>
      </div>

      <div className="flex flex-col">
        <main className="flex-grow h-screen">
          Adipisicing sequi soluta neque laborum velit fugiat qui Quo unde
          eveniet voluptatum nulla eveniet dolorem. Earum vero vel corrupti sit
          illo. Fugit hic cupiditate harum fugit et. Doloremque harum mollitia?
        </main>
        <Sidebar title="Exsample" />
        <Footer />
      </div>
    </>
  )
}
