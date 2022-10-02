<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>John's Burguer</title>
  <link rel="shortcut icon" href="./src/assets/favicon.ico" type="image/x-icon">
  <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&family=Yesteryear&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/global.css?v=<?php echo time(); ?>" />
  <link rel="stylesheet" href="../css/header.css?v=<?php echo time(); ?>" />
  <link rel="stylesheet" href="../css/header-mobile.css?v=<?php echo time(); ?>" />
  <link rel="stylesheet" href="../css/checkout.css?v=<?php echo time(); ?>" />
  <link rel="stylesheet" href="../css/checkout-mobile.css?v=<?php echo time(); ?>" />
  <link rel="stylesheet" href="../css/footer.css?v=<?php echo time(); ?>">
  <link rel="stylesheet" href="../css/footer-mobile.css?v=<?php echo time(); ?>">

  <script defer src="../js/buttonMobile.js"></script>
  <script defer src="../js/checkout.js"></script>
  <script defer src="https://kit.fontawesome.com/583fd2bd34.js" crossorigin="anonymous"></script>
</head>

<body>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <nav id="nav" class="nav">
      <div class="menu">
        <a class="btn-header" id="order-button" href="index.php">
          Voltar Página Home
        </a>
        <div class="social-links">
          <i class="fa-brands fa-facebook-f social-link"></i>
          <i class="fa-brands fa-instagram social-link"></i>
          <i class="fa-brands fa-whatsapp social-link"></i>
        </div>
      </div>
      <button id="btn-mobile" class="btn-mobile">
        <span class="hamburguer"></span>
      </button>
    </nav>
  </header>

  <h1 class="title">checkout</h1>

  <form class="checkout-container" id="form">
    <div class="checkout-part">
      <h2 class="checkout-title">Detalhes de faturamento</h2>

      <div class="contact-form ">
        <h3 class="checkout-subtitle"><i class="fa-solid fa-user checkout-icon"></i>Informações de Contato</h3>
        <hr />
        <div class="input-fullname">
          <fieldset class="input-box">
            <legend><i class="fa-solid fa-user checkout-icon"></i>Nome <span class="asterik">*</span></legend>
            <input type="text" id="name" required/>
          </fieldset>
          <fieldset class="input-box">
            <legend>Sobrenome <span class="asterik">*</span></legend>
            <input type="text" id="lastname" />
          </fieldset>
        </div>

        <fieldset class="input-box">
          <legend><i class="fa-solid fa-envelope checkout-icon"></i>E-mail <span class="asterik">*</span></legend>
          <input type="email" id="email" placeholder="john@gmail.com" required/>
        </fieldset>

        <fieldset class="input-box">
          <legend><i class="fa-solid fa-phone checkout-icon"></i>Telefone <span class="asterik">*</span></legend>
          <input type="text" id="phone" placeholder="(xx) x xxxx-xxxx" required/>
        </fieldset>
      </div>

      <div class="contact-form ">
        <h3 class="checkout-subtitle"><i class="fa-solid fa-map-location checkout-icon"></i>Endereço (use vírgulas)</h3>
        <hr />
        <div class="input-fullname">
          <fieldset class="input-box">
            <legend><i class="fa-solid fa-road checkout-icon"></i></i>Nome da rua e número <span class="asterik">*</span></legend>
            <input type="text" id="street/number" required/>
          </fieldset>
        </div>

        <fieldset class="input-box">
          <legend><i class="fa-solid fa-location-dot checkout-icon"></i></i>Bairro e cidade <span class="asterik">*</span></legend>
          <input type="text" id="neighbourhood/city" required/>
        </fieldset>

        <fieldset class="input-box">
          <legend><i class="fa-solid fa-circle-info checkout-icon"></i>Complemento (Apto, interfone, e outros)</legend>
          <input type="text" id="complement"/>
        </fieldset>

      </div>

</div>
    <div class="checkout-part" id="order">
      <h2 class="checkout-title">Seu Pedido</h2>


      <div class="order-content">
        <?php
        if (isset($_POST['orders-quantinty'])) {
          $quantinty = $_POST['orders-quantinty'];

          for ($i = 0; $i < $quantinty; $i++) {
            $foodName = $_POST['food-name-' . $i];
            $foodPrice = $_POST['food-price-' . $i];
            $foodQuantity = $_POST['food-quantity-' . $i];
            if (isset($foodName) && isset($foodPrice) && isset($foodQuantity)) {
              echo '
                <dl class="box">
                    <dd>' . $foodName . '<span class="quantiny"> - ' . $foodQuantity . '</span></dd>
                    <dd>' . $foodPrice . '</dd>
                </dl>
                  ';
            }
          }
        }
        ?>
        <div class="box">
          <h3>Entrega</h3>
          <div class="delivery">
            <label for="motoboy" class="delivery-form">
              <input type="radio" checked name="delivery" id="motoboy">
              <span>Motoboy +R$10,00</span>
            </label>
            <label for="local" class="delivery-form">
              <input type="radio" name="delivery" id="local">
              <span>Retirar no local</span>
            </label>
          </div>
        </div>
        <?php
        $total = $_POST['total'];
        if (isset($total)) {
          $total = str_replace(',','.', $total);
          $total = (float) $total + 10;
          $total = str_replace('.',',', $total);
          echo '
                <dl class="box">
                    <h3>Total</h3>
                    <h3 id="total">R$' . $total . '</h3>
                </dl>
               ';
        }
        ?>
        <label class="box-option checked">
          <input type="radio" checked class="radio" name="payment" id="on-delivery">
          <p>Pagamento na entrega</p>
        </label>
        <div class="payment-dropdown active" id="on-delivery-dropdown">
          <h4 class="payment-dropdown-title"><i class="fa-regular fa-credit-card checkout-icon"></i> Forma de pagamento</h4>
          <label class="box-radio" for="cash">
            <input type="radio" class="payment-radio" checked name="payment-form" id="cash">
            <span>Dinheiro</span>
          </label>
          <label class="box-radio" for="credit">
            <input type="radio" class="payment-radio" name="payment-form" id="credit">
            <span>Cartão (crédito / débito)</span>
          </label>
        </div>

        <label class="box-option">
          <input type="radio" class="radio" name="payment" id="on-pix">
          <p>Faça um Pix</p>
          <i class="fa-brands fa-pix checkout-icon"></i>
        </label>
        <div class="payment-dropdown" id="on-pix-dropdown">
          <p>Ao finalizar a compra, iremos gerar o código Pix para pagamento na próxima tela e disponibilizar um número WhatsApp para você compartilhar seu comprovante</p>
        </div>


        <button class="checkout-button" id="button" for="" type="submit">Finalizar Compra</button>
      </div>
    </div>
  </form>

  <div class="fade hidden" id="fade"></div>
  <div class="modal hidden" id="modal">
    <div class="modal-header">
      <div class="modal-close"><i class="fa-solid fa-check"></i></div>
      <div class="titles">
        <p>Pedido Confirmado</p>
        <h2>Entrega em 12MIN</h2>
      </div>
    </div>
    <div class="modal-body">
      <div class="message">
        <p id="client-name">João Pedro</p>
        <p>Obrigado pela preferência!</p>
      </div>
      <div class="final-message">Até à próxima ;)</div>
    </div>
    <div class="modal-footer">
      <i class="fa-solid fa-arrow-right"></i>
      <a href="../../index.php" class="button">Voltar Página Home</a>
      <i class="fa-solid fa-arrow-left"></i>
    </div>
  </div>

  <footer class="footer">
    <div class="footer-item footer-logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="footer-item">
      <h4>Fale Conosco</h4>
      <ul class="footer-subitems">
        <li class="footer-subitem">
          <i class="fa-solid fa-phone"></i>
          (34) 3333-3333
        </li>
        <li class="footer-subitem">
          <i class="fa-brands fa-square-whatsapp"></i>
          (34) 9 3333-3333
        </li>
        <li class="footer-subitem">
          <i class="fa-solid fa-envelope"></i>
          sac@johnsburguer.com
        </li>
      </ul>
    </div>
    <div class="footer-item">
      <h4>O que Procura?</h4>
      <ul class="footer-subitems">
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Cardápio</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </div>
    <div class="footer-item">
      <h4>Onde nos encontrar?</h4>
      <div>
        <i class="fa-brands fa-facebook icon"></i>
        <i class="fa-brands fa-instagram icon"></i>
        <i class="fa-brands fa-whatsapp icon"></i>
      </div>
    </div>
  </footer>
</body>

</html>