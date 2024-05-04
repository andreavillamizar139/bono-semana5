

const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
// const faker = require('faker');


Given('I go to losestudiantes home screen', async() => {
  browser.url('https://losestudiantes.com/uniandes/');
  if(await $('.instagramstyles__CloseButton-sc-1ystbkl-1.gixxXm').isDisplayed()) {
    await $('.instagramstyles__CloseButton-sc-1ystbkl-1.gixxXm').click();
  }
});

// instagramstyles__CloseButton-sc-1ystbkl-1 gixxXm
// const closeButtonSelector = '.instagramstyles__CloseButton-sc-1ystbkl-1.gixxXm';
// await $(closeButtonSelector).waitForExist(3000);
// await $(closeButtonSelector).waitForDisplayed(3000);
// const isModalDisplayed = await $(closeButtonSelector).isDisplayed();
// if(!isModalDisplayed) {
//   console.log("NOHAYYYYYYYY");
// }

// if(isModalDisplayed) {
//   await $(closeButtonSelector).click();
// }
// // Espera a que el botón de cerrar esté presente y visible
// await $(closeButtonSelector).waitForExist({ timeout: 5000 });
// await $(closeButtonSelector).waitForDisplayed({ timeout: 5000 });

// const isModalDisplayed = await $(modalSelector).isDisplayed();
// if (isModalDisplayed) {
//   await $(closeButtonSelector).click();
// }
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
  // When('I try to register with', async() => {
    
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
  // When('I try to register with', async() => {
    // const name = faker.name.firstName();
    // const lastName = faker.name.lastName();
    // const email = faker.internet.email();
    // const password = faker.internet.password();
    const name = 'Andrea'
    const lastName = 'Villamizar'
    const email = generarCorreoAleatorio();
    const password = '12345678'

    // Ahora puedes utilizar estos datos aleatorios en tu formulario de registro
    // Por ejemplo:
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
    correo += '@example.com'; // Puedes cambiar 'example.com' por el dominio que desees
    return correo;
}

  // body > div:nth-child(5)
  
  // <div role="dialog">
  //   <div class="fade modal-backdrop in">
  //     </div>
  //     <div role="dialog" tabindex="-1" class="fade in modal" style="display: block;">
  //       <div class="modal-dialog">
  //         <div class="modal-content" role="document">
  //           <div class="modal-header">
  //             <h3 class="text-center">Quieres seguirnos en <i>Instagram</i>?</h3>
  //             <button class="instagramstyles__CloseButton-sc-1ystbkl-1 gixxXm">×</button>
  //             </div><div class="modal-body">
  //               <div class="instagramstyles__CallToAction-sc-1ystbkl-0 gYZEud">
  //                 <div class="flex pb-4 justify-center text-xl font-bold">
  //                   <a href="https://www.instagram.com/nosotroslosestudiantes/" target="_blank">Instagram: <span class="underline">@nosotroslosestudiantes</span></a>
  //                   </div>
  //                   <div>Posteamos sobre:</div>
  //                   <ul class="list-disc list-inside">
  //                     <li>Los profesores/carreras mejor rankeados.</li>
  //                     <li>Historias de estudiantes (Uniandes, La Nacho y URosario).</li>
  //                     <li>Updates de la página.</li>
  //                     </ul>
  //                     <br>
  //                     <div class="flex justify-center text-lg">Solo te mostraremos esto una vez :)</div>
  //                     </div>
  //                     </div>
  //                     </div>
  //                     </div>
  //                     </div>
  //                     </div>
  Then('I hope to see a message indicating successful registration', async () => {
    // const alertElement = await $('.notice.alert.alert-danger');
    // await alertElement.waitForDisplayed({ timeout: 5000 });
    // await expect($('.notice.alert.alert-danger')).toBeExisting();
    // await expect($('.notice.alert.alert-danger')).toHaveTextContaining(error);
    const swal2TitleElement = await $('h2.swal2-title');
    await swal2TitleElement.waitForDisplayed({ timeout: 5000 });
    await expect($('h2.swal2-title')).toBeExisting();
    await expect($('h2.swal2-title')).toHaveTextContaining("¡Inscripción exitosa!");
    await $('.swal2-confirm.swal2-styled').isDisplayed();
    await $('.swal2-confirm.swal2-styled').click();
    await $('.loginButton.btn.btn-primary').isDisplayed();
    await $('.loginButton.btn.btn-primary').click();
  });
