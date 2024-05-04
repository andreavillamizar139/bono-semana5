

const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
// const faker = require('faker');


Given('I go to losestudiantes home screen', async() => {
  browser.url('https://losestudiantes.com/uniandes/');
  if(await $('.instagramstyles__CloseButton-sc-1ystbkl-1.gixxXm').isDisplayed()) {
    await $('.instagramstyles__CloseButton-sc-1ystbkl-1.gixxXm').click();
  }
});

When('I open the login screen', async() => {
  await $('button.loginButton').waitForExist(5000);
  await $('button.loginButton').waitForDisplayed(5000);
  await $('button.loginButton').click();

});

When(/^I fill with (.*) and (.*)$/ , async(email, password) => {
  var mailInput = await $('input[name="email"]');
  await mailInput.setValue(email);

  var passwordInput = await $('input[name="password"]');
  await passwordInput.setValue(password);
});

When('I try to login', async() => {
 await $('button=Ingresar').click();
});


Then('I expect to see {string}', async (error) => {
  const alertElement = await $('.notice.alert.alert-danger');
  await alertElement.waitForDisplayed({ timeout: 5000 });
  await expect($('.notice.alert.alert-danger')).toBeExisting();
  await expect($('.notice.alert.alert-danger')).toHaveTextContaining(error);

});

Then('I expect to see button salir', async() => {
  await expect($('.loginButton.btn.btn-primary')).toBeExisting();
  
});

When('I open the registration screen', async () => {
  await $('a=Regístrate').waitForExist({ timeout: 25000 });
  await $('a=Regístrate').click();
  // await alertElement.waitForDisplayed({ timeout: 5000 });
});

When('I try to register', async() => {
  await $('button=Registrarse').click();
});

When(/^I try to register with (.*), (.*), (.*), (.*), (.*), y (.*)$/ , async(nombre, apellido, email, password, repeatPassword, terms) => {
    
    var nameInput = await $('input[name="firstname"]');
    await nameInput.setValue(nombre);
    
    var lastNameInput = await $('input[name="lastname"]');
    await lastNameInput.setValue(apellido);
    
    var mailInput = await $('input[name="email"]');
    await mailInput.setValue(email);
    
    var passwordInput = await $('input[name="password"]');
    await passwordInput.setValue(password);
    
    var passwordInput2 = await $('input[name="password2"]');
    await passwordInput2.setValue(repeatPassword);
    
    var checkBoxAccept = await $('input[name="accept"]');
    // Convertir el valor de aceptarTerminos a un valor booleano
    if (terms == 'true') {
      if (!(await checkBoxAccept.isSelected())) {
        await checkBoxAccept.click();
      }
    }
    
  });
When('I try to register ok' , async() => {
  
    const name = 'Andrea'
    const lastName = 'Villamizar'
    const email = generarCorreoAleatorio();
    const password = '12345678'

    await $('input[name="firstname"]').setValue(name);
    await $('input[name="lastname"]').setValue(lastName);
    await $('input[name="email"]').setValue(email);
    await $('input[name="password"]').setValue(password);
    await $('input[name="password2"]').setValue(password);
    var checkBoxAccept = await $('input[name="accept"]');
    if (!(await checkBoxAccept.isSelected())) {
      await checkBoxAccept.click();
    }
    
  });

  function generarCorreoAleatorio() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let correo = '';
    for (let i = 0; i < 10; i++) {
        correo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    correo += '@example.com'; 
    return correo;
}

  Then('I hope to see a message indicating successful registration', async () => {
   
    const swal2TitleElement = await $('h2.swal2-title');
    await swal2TitleElement.waitForDisplayed({ timeout: 5000 });
    await expect($('h2.swal2-title')).toBeExisting();
    await expect($('h2.swal2-title')).toHaveTextContaining("¡Inscripción exitosa!");
    await $('.swal2-confirm.swal2-styled').isDisplayed();
    await $('.swal2-confirm.swal2-styled').click();
    await $('.loginButton.btn.btn-primary').isDisplayed();
    await $('.loginButton.btn.btn-primary').click();
  });
