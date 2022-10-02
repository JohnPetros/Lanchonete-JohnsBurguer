<section id="food-menu" class="food-menu">
    <h2 class="title">Faça seu pedido agora</h2>
    <h3 class="subtitle">Entrega em até 30 minutos</h3>
    <div class="food-menu-container">
        <div class="food-categories">
            <div id="burguer" class="category category-selected">
                Hamburguer
            </div>
            <div id="desert" class="category">
                Sobremesas
            </div>
            <div id="drink" class="category">
                Bebidas
            </div>
        </div>
        <?php
        
          /*-- ----------------------- BURGUES ------------------------------- */
            include('burguers.html');

        /* ----------------------- DESERTS ------------------------------- */
           include('deserts.html');

        /* ----------------------- DRINKS ------------------------------- */
          include('drinks.html');

      ?>
    
    </div>
</section>