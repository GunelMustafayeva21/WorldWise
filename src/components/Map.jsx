import React from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { useNavigate } from 'react-router-dom'

const Map=() => {

  const [searchParams, setSearchParams] = useSearchParams()

  const lat= searchParams.get("lat")
  const lng= searchParams.get("lng")

  const navigate=useNavigate()
  return (
    <div className={styles.mapContainer} onClick={()=> navigate("form")}>
       <h1>Map {lat} {lng}</h1>
    </div>
  )
}

export default Map