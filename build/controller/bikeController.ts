import express from 'express'

const createBikeStation = ( req:express.Request, res:express.Response ) => {
    res.send('createStation')
}

const showBikeStations = ( req:express.Request, res:express.Response ) => {
    res.send('showStations')
}
const deleteBikeStation = ( req:express.Request, res:express.Response ) => {
    res.send('deleteStation')
}

export {createBikeStation,showBikeStations,deleteBikeStation}