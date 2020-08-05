const app = require('../app')
const { Teacher, sequelize } = require('../models')
const request = require('supertest')
const { queryInterface } = sequelize
const { generateToken } = require('../helpers/jwt')

describe('Teacher routes test', () => {
  let token;

  const teacherData = {
    name: 'Luqman',
    email: 'luqman@mail.com',
    password: '123',
    role: 'teacher',
    kompetensi: 'Programming'
  }

  const teacherLogin = {
    email: 'luqman@mail.com',
    password: '123'
  }

  const wrongPassword = {
    email: 'luqman@mail.com',
    password: '456'
  }

  const wrongEmail = {
    email: 'rino@mail.com',
    password: '123'
  }


  describe('POST /teacher/register - create a new teacher', () => {
    beforeAll(done => {
      Teacher.create(teacherData)
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    afterAll(done => {
      queryInterface
      .bulkDelete('Teachers', {})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    test('201 success register - should create a new Teacher ', (done) => {
      request(app)
        .post('/teacher/register')
        .send(teacherData)
        .then(response => {
          const { body, status } = response
          expect(status).toBe(201)
          expect(body).toHaveProperty('id', expect.any(Number))
          expect(body).toHaveProperty('name', teacherData.name)
          expect(body).toHaveProperty('email', teacherData.email)
          expect(body).toHaveProperty('password', expect.any(String))
          expect(body).toHaveProperty('role', teacherData.role)
          expect(body).toHaveProperty('kompetensi', teacherData.kompetensi)
          done()
        })
    })

    test('400 Failed register - should return error if name is null', (done) => {
      request(app)
        .post('/teacher/register')
        .send({
          email: 'jackson@mail.com',
          password: '123',
          role: 'teacher',
          kompetensi: 'Programming'
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
        .post('/teacher/register')
        .send({
          name: 'lukman',
          password: '123',
          role: 'teacher',
          kompetensi: 'Programming'
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
        .post('/teacher/register')
        .send({
          name: 'lukman',
          email: 'lukman@mail.com',
          role: 'student',
          kompetensi: 'Programming'
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
        .post('/teacher/register')
        .send({
          name: 'lukman',
          email: 'lukman@mail.com',
          password: '123',
          jenjangsekolah: 'SMA',
          kompetensi: 'Programming'
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Role cannot be empty')
          done()
        })
    })

    test('400 Failed register - should return error if kompetensi is null', (done) => {
      request(app)
        .post('/teacher/register')
        .send({
          name: 'lukman',
          email: 'lukman@mail.com',
          password: '123',
          role: 'teacher',
        })
        .then(response => {
          const { body, status } = response
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Kompetensi cannot be empty')
          done()
        })
    })

  })

  describe('POST /teacher/login - teacher authentication process', () => {
    beforeAll(done => {
      Teacher.create(teacherData)
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    afterAll(done => {
      queryInterface
      .bulkDelete('Teachers', {})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    test('200 success login - should return token', (done) => {
      request(app)
      .post('/teacher/login')
      .send(teacherLogin)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty('token', expect.any(String))
        done()
      })
    })

    test('400 failed login with wrong password - should return error message', (done) => {
      request(app)
      .post('/teacher/login')
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
      .post('/teacher/login')
      .send(wrongEmail)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'Invalid email or password')
        done()
      })
    })
    
  })

  describe('Get /teacher - show all teachers list', () => {
    beforeAll(done => {
      Teacher.create(teacherData)
      .then((teacher) => {
        let payload = {id: teacher.id, email:teacher.email}
        token = generateToken(payload)
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    afterAll(done => {
      queryInterface
      .bulkDelete('Teachers', {})
      .then(() => {
        done()
      })
      .catch(err => {
        done(err)
      })
    })

    test('200 success show all teachers list - should return teachers list', (done) => {
      request(app)
      .get('/teacher')
      .set('token', token)
      .then(response => {
        const { body, status } = response
        expect(status).toBe(200)
        expect(body).toEqual(expect.arrayContaining(body))
        done()
      })
    })


    test('400 failed authentication to show all teachers list - should return error message', (done) => {
      request(app)
      .get('/teacher')
      .then(response => {
        const { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty('message', 'token not found')

        done()
      })
    })

  })

})