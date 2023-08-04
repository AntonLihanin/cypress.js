describe('Тестирование huntingPony', function () {
   it('Оформим заказ', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[href="https://huntingpony.com/collection/povodki"] > .banner-list__item-photo > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
        cy.get('[data-product-id="340984945"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__btn-label').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click();
        cy.wait(5000);
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа').should('be.visible');
})
})