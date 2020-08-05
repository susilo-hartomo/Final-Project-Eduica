const app = require('../app')
const { Student, Teacher, Transaction, sequelize } = require('../models')
const request = require('supertest')
const { queryInterface } = sequelize
const { generateToken } = require('../helpers/jwt')


describe('Transaction routes test', () => {
  const transaction = {
    StudentId: 1,
    TeacherId: 1,
    time: '15:00',
    price: 100000,
    date: '2020/12/12',
  }

  const updateStatus = {
    id: 1,
    transaction_status : 'capture'
  }

  const studentData = {
    name: 'rino',
    email: 'rino@mail.com',
    password: '123',
    role: 'student',
    jenjangsekolah: 'SMA',
    telp: '081288888',
    address: 'jl papandayan'
  }

  const transactionData = {
    price: 100000,
    paid: false,
    time: '16:00',
    date: '2020/12/12',
    TeacherId: 1
  }

  const wrongInput = {
    price: 100000,
    paid: false,
  }

  let token;
  let StudentId;

  describe('POST /transaction - Create a new order in transaction', () => {
    beforeAll(done => {
      Student.create(studentData)
      .then((student) => {
        StudentId = student.id
        let payload = {id: student.id, email:student.email}
        token = generateToken(payload)
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    afterAll(done => {
      queryInterface
      .bulkDelete('Students', {})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    test('200 success create transaction order - should return an object of order detail', (done) => {
      request(app)
      .post('/transaction')
      .set('token', token)
      .send(transactionData)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(201)
        expect(body).toHaveProperty('id', expect.any(Number))
        expect(body).toHaveProperty('StudentId', StudentId)
        expect(body).toHaveProperty('TeacherId', transactionData.TeacherId)
        expect(body).toHaveProperty('time', `${transactionData.time}:00`)
        expect(body).toHaveProperty('price', transactionData.price)
        expect(body).toHaveProperty('date', transactionData.date.split('/').join('-'))
        done()
      })
    })

    test('400 authentication failed for transaction order - should return an error message', (done) => {
      request(app)
      .post('/transaction')
      .send(transactionData)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'token not found')
        done()
      })
    })


  })

  describe('POST /transaction/updateStatus - change paid status', () => {
    beforeAll(done => {
      Student.create(studentData)
      .then((student) => {
        StudentId = student.id
        let payload = {id: student.id, email:student.email}
        token = generateToken(payload)
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    afterAll(done => {
      queryInterface
      .bulkDelete('Students', {})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    test('200 success update paid status - should return message', (done) => {
      request(app)
      .post('/transaction/updateStatus')
      .set('token', token)
      .send(updateStatus)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('message', "success payment")
        done()
      })
    })

    test('400 failed authentication to update paid status - should return error message', (done) => {
      request(app)
      .post('/transaction/updateStatus')
      .send(updateStatus)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', "token not found")
        done()
      })
    })

  })


})