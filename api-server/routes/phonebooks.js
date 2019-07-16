var express = require('express');
var router = express.Router();
var Phonebook = require('../models/phonebook');


/* GET users listing. */
router.get('/', (req, res) => {
  Phonebook.find().then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
});


router.post('/', (req, res) => {
  // console.log(req.body);
  Phonebook.insertMany({
    id: req.body.id,
    name: req.body.name,
    phone: req.body.phone
  }).then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
})


router.put('/:id', (req, res) => {
  Phonebook.updateOne({ id: req.params.id },
    {
      $set:
      {
        name: req.body.name,
        phone: req.body.phone
      }
    }).then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    })
})


router.delete('/:id', (req, res) => {
  Phonebook.deleteOne({ id: req.params.id })
    .then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    })
})



module.exports = router;







// var express = require('express');
// const Phonebooks = require('../models/phonebooks')
// var router = express.Router();


// /* GET home page. */
// router.get('/', async (req, res) => {
//   try {
//     const data = await Phonebooks.find({})
//     res.send(data)
//   } catch (error) {
//     res.status(500).send(error)
//   }
// })


// router.post('/', async (req, res) => {
//   const data = new Phonebooks(req.body)
//   try {
//     await data.save()
//     res.status(201).send(data)
//   } catch (error) {
//     res.status(400).send(error)
//   }
// })


// router.put('/:id', async (req, res) => {
//   const updates = Object.keys(req.body)
//   const allowedUpdates = ['name', 'phone', 'sent']
//   const isValidOperation = updates.every(update => {
//     return allowedUpdates.includes(update)
//   })

//   if (!isValidOperation) {
//     return res.status(404).send({ error: 'Invalid Updates' })
//   }
//   try {
//     const data = await Phonebooks.findOne({ id: req.params.id })
//     updates.forEach((update) => data[update] = req.body[update])
//     await data.save()
//     if (!data) {
//       return res.status(404).send()
//     }
//     res.send({ data })
//   } catch (error) {
//     res.status(400).send(error)
//   }
// })


// // router.delete('/:id', async (req, res) => {
// //   try {
// //     const data = await Phonebooks.findByIdAndRemove({ id: req.params.id })
// //     if (!data) {
// //       return res.status(404).send()
// //     }
// //     res.send({
// //       status: "SUCCESS",
// //       data
// //     })
// //   } catch (error) {
// //     res.status(500).send()
// //   }
// // })


// //  ================ delete ===================
// router.delete('/:id', (req, res, next) => {

//   let id = req.params.id;
//   // console.log(req.params.id);

//   Data.findByIdAndRemove(id, (err, dataInfo) => {
//     console.log(dataInfo);
//     if (err) {
//       res.json(err)
//     } else {
//       res.json({
//         status: 'SUCCESS',
//         data: {
//           id: dataInfo.id,
//           name: dataInfo.name,
//           phone: dataInfo.phone
//         }
//       })
//     }
//   })
// })
// // router.delete('/:id', (req, res) => {
// //   Phonebook.deleteOne({ id: req.params.id })
// //     .then(data => {
// //       res.json(data);
// //     }).catch(err => {
// //       res.json(err);
// //     })
// // })



// module.exports = router;



