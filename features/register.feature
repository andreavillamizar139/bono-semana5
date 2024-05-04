Feature: Register into losestudiantes
    As a user, I want to register on the Losestudiantes website to be able to rate the teachers

    
Scenario: Successful register
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the registration screen
    And I try to register ok
    And I try to register
    Then I hope to see a message indicating successful registration

Scenario: Registration failed due to the password field
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the registration screen
    And I try to register with <nombre>, <apellido>, <email>, <password>, <repeatPassword>, y <terms>
    And I try to register
    Then I expect to see <error>
    

    Examples:
        |nombre|apellido  | email                         | password | repeatPassword|error|terms|
        |Andrea|Villamizar|andreavillamizar139@gmail.com  |          |               |"Ingresa una contraseña"|true|
        |Andrea|Villamizar|andreavillamizar139@gmail.com  |123       |123            |"La contraseña debe tener 8 caracteres"|true|


Scenario: Registration failed general
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the registration screen
    And I try to register with <nombre>, <apellido>, <email>, <password>, <repeatPassword>, y <terms>
    And I try to register
    Then I expect to see <error>
    

    Examples:
        |nombre|apellido  | email                         | password | repeatPassword|error|terms|
        |Andrea|Villamizar|andreavillamizar139@gmail.com  |contra123 | contra123     |"Tienes que aceptar los términos y condiciones para crear una cuenta"|false|


Scenario: Registration failed email
    Given I go to losestudiantes home screen
    When I open the login screen
    And I open the registration screen
    And I try to register with <nombre>, <apellido>, <email>, <password>, <repeatPassword>, y <terms>
    And I try to register
    Then I expect to see <error>
    

    Examples:
        |nombre|apellido  | email                         | password | repeatPassword|error|terms|
        |Andrea|Villamizar|andreavillamizar139gmail.com   |12345678  |12345678       |"Ingresa un correo electrónico válido"|true|
        |||   |  |               |"Ingresa un correo electrónico"|true|

