import FitnessByBodyPartCard from "./FitnessByBodyPartCard"

export const FitnessByBodyPartList = (props) => {

    const {allBodyParts} = props
    const list = allBodyParts.map((FitnessByBodyPartCard) => {
        return <FitnessByBodyPartCard bodyPart={bodyPart} />
    });

    return (
        <>
            {list}
        </>
    )
}