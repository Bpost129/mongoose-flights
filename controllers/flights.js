import { Flight } from "../models/flight.js";

function index(req, res) {
  Flight.find({}).then(flights => {
    res.render('flights/index', {
      title: 'Flight List',
      flights,
    })
  })
  .catch(err => {
    console.log(err)
    res.render('/')
  })
}

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Book Flight'
  })
}

function create(req, res) {
  //req.body.departs -- default = 1 year from creation
  Flight.create(req.body).then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function show(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Details',
      flight,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newFlight as new,
  create,
  index,
  show,

}