'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Range } from '@/shared/ui/Range'
import { RootState } from '@/store'
import { setMass } from '@/store/Slice/RangeSlice'
import { setHeight } from '@/store/Slice/HeightSlice'
import { calcBMI } from '@/store/Slice/BMICalcSlice'
import { Button_BMI } from '@/shared/ui/Button_BMI'

import styles from './page.module.scss'

export default function Home() {
  const MassValue = useSelector((state: RootState) => state.mass.MassValue);
  const HeightValue = useSelector((state: RootState) => state.height.HeightValue);
  const BMI = useSelector((state: RootState) => state.BMI);

  const dispatch = useDispatch();

  const CalcBMI = () => {
    if (HeightValue == 0 || MassValue == 0) {
      alert("Enter Weight or Height !")
      return false
    }

    dispatch(calcBMI({Height: HeightValue, Mass: MassValue}))
  }

  return (
    <div className={styles.Main}>
      <div className={styles.Ranges}>
        <Range ReduxDispatch={setMass} ReduxValue={MassValue} min={0} max={300} text='Weight' />
        <Range ReduxDispatch={setHeight} ReduxValue={HeightValue} min={0} max={300} text='Height' />
      </div>
      <Button_BMI onClick={CalcBMI}>
        <p>Calculate BMI</p>
      </Button_BMI>
      <h2>Your BMI score: {BMI.BMINumber}</h2>
      <h2 style={{color: BMI.BMINumber <= 18.5 ? "#DC143C" : BMI.BMINumber <= 25.0 ? "#7ea31d" : "#DC143C"}}>{BMI.infoBMI}</h2>
    </div>
  )
}