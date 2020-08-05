const app = require('../app')
const { Student, sequelize } = require('../models')
const request = require('supertest')
const { queryInterface } = sequelize

describe('Student routes test', () => {
  const studentData = {
    name: 'rino',
    email: 'rino@mail.com',
    password: '123',
    role: 'student',
    jenjangsekolah: 'SMA',
    telp: '081288888',
    address: 'jl papandayan'
  }

  const studentLogin = {
    email: 'rino@mail.com',
    password: '123'
  }

  const wrongPassword = {
    email: 'rino@mail.com',
    password: '456'
  }

  const wrongEmail = {
    email: 'ao@mail.com',
    password: '456'
  }

  const student2 = {
    name: 'jackson',
    email: 'jackson@mail.com',
    password: '123',
    role: 'student',
    jenjangsekolah: 'SMA',
    telp: '08129999',
    address: 'jl papandayan'
  }

  describe('POST /student/register - create new student', () => {

    beforeAll(done => {
      Student.create(student2)
      .then(() => {
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

    test('201 success register - should create a new Student ', (done) => {
      request(app)
        .post('/student/register')
        .send(student2)
        .then(response => {
          const { body, status } = response
          expect(status).toBe(201)
          expect(body).toHaveProperty('id', expect.any(Number))
          expect(body).toHaveProperty('name', student2.name)
          expect(body).toHaveProperty('email', student2.email)
          expect(body).toHaveProperty('password', expect.any(String))
          expect(body).toHaveProperty('role', student2.role)
          expect(body).toHaveProperty('jenjangsekolah', student2.jenjangsekolah)
          expect(body).toHaveProperty('telp', student2.telp)
          expect(body).toHaveProperty('address', student2.address)
          done()
        })
    })

    test('400 Failed register - should return error if name is null', (done) => {
      request(app)
        .post('/student/register')
        .send({
          email: 'jackson@mail.com',
          password: '123',
          role: 'student',
          jenjangsekolah: 'SMA',
          telp: '08129999',
          address: 'jl papandayan'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Name cannot be empty')
          done()
        })
    })
    
    test('400 Failed register - should return error if email is null', (done) => {
      request(app)
        .post('/student/register')
        .send({
          name: 'jackson',
          password: '123',
          role: 'student',
          jenjangsekolah: 'SMA',
          telp: '08129999',
          address: 'jl papandayan'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Email cannot be empty')
          done()
        })
    })

    test('400 Failed register - should return error if password is null', (done) => {
      request(app)
        .post('/student/register')
        .send({
          name: 'jackson',
          email: 'jackson@mail.com',
          role: 'student',
          jenjangsekolah: 'SMA',
          telp: '08129999',
          address: 'jl papandayan'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Password cannot be empty')
          done()
        })
    })

    test('400 Failed register - should return error if role is null', (done) => {
      request(app)
        .post('/student/register')
        .send({
          name: 'jackson',
          email: 'jackson@mail.com',
          password: '123',
          jenjangsekolah: 'SMA',
          telp: '08129999',
          address: 'jl papandayan'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Role cannot be empty')
          done()
        })
    })
    
    test('400 Failed register - should return error if jenjangsekolah is null', (done) => {
      request(app)
        .post('/student/register')
        .send({
          name: 'jackson',
          email: 'jackson@mail.com',
          password: '123',
          role: 'student',
          telp: '08129999',
          address: 'jl papandayan',
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Jenjang Sekolah cannot be empty')
          done()
        })
    })

    test('400 Failed register - should return error if telp is null', (done) => {
      request(app)
        .post('/student/register')
        .send({
          name: 'jackson',
          email: 'jackson@mail.com',
          password: '123',
          role: 'student',
          jenjangsekolah: 'SMA',
          address: 'jl papandayan'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Telp cannot be empty')
          done()
        })
    })

  })

  describe('POST /student/login - student authentication process', () => {
    beforeAll(done => {
      Student.create(studentData)
      .then(() => {
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

    test('200 success login - should return token', (done) => {
      request(app)
      .post('/student/login')
      .send(studentLogin)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('token', expect.any(String))
        done()
      })
    })

    test('400 failed login with wrong password - should return error message', (done) => {
      request(app)
      .post('/student/login')
      .send(wrongPassword)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'Invalid email or password')
        done()
      })
    })

    test('400 failed login with wrong email - should return error message', (done) => {
      request(app)
      .post('/student/login')
      .send(wrongEmail)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'Invalid email or password')
        done()
      })
    })

  })


})