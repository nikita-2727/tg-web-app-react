
import Header from "../components/Header/Header";
import Main from "../components/Menu/Main";

export default function MainPage(props) {
    localStorage.setItem('page', JSON.stringify('/'))
    return (
        <>
            <Header photo='https://i.postimg.cc/BvLdbpb1/photo-2024-04-25-17-10-46-2.jpg'/>
            <Main />
        </>
    )
}