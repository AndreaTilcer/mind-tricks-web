import {ButtonPrimary} from "../components/button/ButtonPrimary";
import {useNavigate} from "react-router-dom";
import {PageLayout} from "../components/PageLayout";
import {H1} from "../components/headings/H1.jsx";

export function Main() {
    const navigate = useNavigate()

    const navigateToSluzby = () => {
        navigate("/sluzby")
    }

    return (
        <PageLayout>
            <H1 text="Psychologické poradenství pro hráče sportu a e - sportu" />
            <p className="mt-6 text-lg leading-8 text-blue-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda consequatur cum
                dolore enim eos impedit iste laboriosam magnam, magni nihil officiis placeat quasi qui quidem
                sed, sequi suscipit, voluptatibus.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
                <ButtonPrimary onClick={navigateToSluzby} text={`Dozvědět se více`}/>
            </div>
        </PageLayout>
    )
}

