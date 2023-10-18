import React from 'react'
import { getMean,getMedian,getMode } from '../utils/utils'
const Table = ({alcoholList,property}) => {
  return (
    <>
    <h2>{property} data</h2>
    <table>
        <thead>
            <tr>
              <th>Measure</th>
              {Object.keys(alcoholList).map((key)=><th>Class {key}</th>)}
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>Mean</td>
              {Object.keys(alcoholList).map((key, index)=><td>{getMean(key,index,property)}</td>)}
            </tr>
            <tr>
              <td>Median</td>
              {Object.keys(alcoholList).map((key, index)=><td>{getMedian(key,index,property)}</td>)}
            </tr>
            <tr>
              <td>Mode</td>
              {Object.keys(alcoholList).map((key, index)=><td>{getMode(key,index,property)}</td>)}

            </tr>
        </tbody>
      </table>
      </>
  )
}

export default Table