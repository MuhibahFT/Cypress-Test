describe('template spec', () => {

  beforeEach(() => {
    // Before each test, visit the specified URL
    cy.visit('https://admin-fat.maucash.id/productive-loan/index.html#/')

 
  })

  it('Badan Usaha - Working Capital', () => {
    // Test case for Badan Usaha - Working Capital

    // Stage 1: Formulir pembiayaan modal usaha
    cy.get('input[placeholder="Please select Pengajuan Pinjaman"]').click()
    cy.get('.el-select-dropdown__item').contains('Badan Usaha').click()

    function generateRandomPhoneNumber() {
      // Function to generate a random phone number starting with '081'
      let phoneNumber = '081';
      for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
      }
      return phoneNumber;
    }
    const randomPhoneNumber = generateRandomPhoneNumber();
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type(randomPhoneNumber)
    cy.get('.el-input-group__append > .el-button > span').click()
    cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type('8888')
    cy.get('.el-form-item__content > .el-button').click()

    // Stage 2: Pertanyaan pembiayaan
    cy.get('input[placeholder="Pilih Product Pembiayaan"]').click()
    cy.get('.el-select-dropdown__item').contains('Working Capital').click()
    cy.get('input[placeholder="Pilih Tenor Pinjaman"]').click()
    cy.get('.el-select-dropdown__item').contains('4 bulan').click()
    cy.get('input[placeholder="Pilih tujuan pembiayaan"]').click()
    cy.get('.el-select-dropdown__item').contains('Ekspansi Bisnis').click()
    cy.wait(10000)
    cy.get('#event_productquestion').click()

    // Stage 3: Data badan usaha
    cy.get('input[placeholder="Masukkan nama badan usaha"]').type('PT Abadi Jaya')
    cy.get('input[placeholder="Masukkan bentuk badan usaha"]').click()
    cy.get('.el-select-dropdown__item').contains('Badan Usaha Unit Desa (BUUD)').click()

    function generateRandomNPWP() {
      // Function to generate a random NPWP (tax ID number)
      const randomDigits = () => Math.floor(Math.random() * 10);
      const npwp = [
        randomDigits(), randomDigits(), '.',
        randomDigits(), randomDigits(), randomDigits(), '.',
        randomDigits(), randomDigits(), randomDigits(), '.',
        randomDigits(), '-',
        randomDigits(), randomDigits(), randomDigits(), '.',
        randomDigits(), randomDigits(), randomDigits()
      ].join('');
      return npwp;
    }
    const randomNPWP = generateRandomNPWP();
    cy.get('input[placeholder="00.000.000.0-000.000"]').type(randomNPWP)

    cy.get('input[placeholder="Ambil foto NPWP badan usaha"]').click()
    cy.wait(5000)
    cy.get('button.el-button--primary span').contains('Capture').click()
    cy.get('input.el-input__inner[placeholder="Masukkan email tempat usaha"]').type('cypress1333@gmail.com')
    cy.get(':nth-child(6) > .el-form-item__content > .el-input > .el-input__inner').type('Jalan Gatot Subroto')
    cy.get('input[placeholder="Provinsi Badan Usaha"]').click()
    cy.get('.el-select-dropdown__item').contains('DKI Jakarta').click()
    cy.get('input[placeholder="Pilih kabupaten atau kota badan usaha"]').click()
    cy.get('.el-select-dropdown__item').contains('Jakarta Timur').click()
    cy.get('input[placeholder="Pilih kecamatan badan usaha"]').click()
    cy.get('.el-select-dropdown__item').contains('Cakung').click()
    cy.get('input[placeholder="Pilih kelurahan badan usaha"]').click()
    cy.wait(100)
    cy.contains('li.el-select-dropdown__item span', 'Pulo Gebang').click();
    cy.get('input[placeholder="Masukan Nama Lengkap Penanggung Jawab Perusahaan"]').type('Bagus Prakusa')
    cy.get('input[placeholder="Masukan No Handphone Penanggung Jawab Perusahaan"]').type('08578357382')
    cy.get('input[placeholder="Masukan Jabatan Penanggung Jawab Perusahaan"]').type('CEO')
    cy.get(':nth-child(15) > .el-form-item__content > .checkTnc > .el-checkbox > .el-checkbox__input > .el-checkbox__inner').click()
    cy.get(':nth-child(16) > .el-form-item__content > .checkTnc > .el-checkbox > .el-checkbox__input > .el-checkbox__inner').click()
    cy.get(':nth-child(17) > .el-form-item__content > .checkTnc > .el-checkbox > .el-checkbox__input > .el-checkbox__inner').click()
    cy.wait(2000)
    cy.get('#event_businessinfo_businessentity').click()





  })
})

