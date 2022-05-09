import { useState, useEffect } from 'react';
import { education } from '../api';
import { EducationInfoCard } from '../components/education/EducationInfoCard';

export const EducationHome = () => {

    const [exerciseInfo, setExerciseInfo] = useState([]);

    async function getExerciseInfo() {
      const response = await education();
      setExerciseInfo(response.data)
    };
  
    useEffect(() => {
      getExerciseInfo()
    }, []);

    const list = exerciseInfo.map((exercise) => {
        return <EducationInfoCard info={exercise} />
    });

    return (
        <>
            {list}
        </>
    )
}