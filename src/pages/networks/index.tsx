import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { db } from "../../services/firebaseConnection";
import { setDoc, getDoc, doc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setIntagram] = useState("");
  const [tiktok, setTiktok] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "redeSocial");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setIntagram(snapshot.data()?.instagram);
          setTiktok(snapshot.data()?.tiktok);
        }
      });
    }

    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "redeSocial"), {
      facebook: facebook,
      instagram: instagram,
      tiktok: tiktok,
    })
      .then(() => {
        console.log("Cadastrado com sucesso");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar" + error);
      });
  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>
      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do facebook...
        </label>
        <Input
          type="url"
          placeholder="Digite a url do facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do instagram...
        </label>
        <Input
          type="url"
          placeholder="Digite a url do instagram..."
          value={instagram}
          onChange={(e) => setIntagram(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do tiktok...
        </label>
        <Input
          type="url"
          placeholder="Digite a url do tiktok..."
          value={tiktok}
          onChange={(e) => setTiktok(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center mb-7 font-medium cursor-pointer"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
}
