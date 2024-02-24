'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tu-rumba documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-257a044be9b9491d189bb901d6967613e7dad826e011aece24650905801a7e32936990b0e5c61080b92daa4200714ac185bff0e42c279369291cfe1d7f86a947"' : 'data-bs-target="#xs-controllers-links-module-AppModule-257a044be9b9491d189bb901d6967613e7dad826e011aece24650905801a7e32936990b0e5c61080b92daa4200714ac185bff0e42c279369291cfe1d7f86a947"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-257a044be9b9491d189bb901d6967613e7dad826e011aece24650905801a7e32936990b0e5c61080b92daa4200714ac185bff0e42c279369291cfe1d7f86a947"' :
                                            'id="xs-controllers-links-module-AppModule-257a044be9b9491d189bb901d6967613e7dad826e011aece24650905801a7e32936990b0e5c61080b92daa4200714ac185bff0e42c279369291cfe1d7f86a947"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-257a044be9b9491d189bb901d6967613e7dad826e011aece24650905801a7e32936990b0e5c61080b92daa4200714ac185bff0e42c279369291cfe1d7f86a947"' : 'data-bs-target="#xs-injectables-links-module-AppModule-257a044be9b9491d189bb901d6967613e7dad826e011aece24650905801a7e32936990b0e5c61080b92daa4200714ac185bff0e42c279369291cfe1d7f86a947"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-257a044be9b9491d189bb901d6967613e7dad826e011aece24650905801a7e32936990b0e5c61080b92daa4200714ac185bff0e42c279369291cfe1d7f86a947"' :
                                        'id="xs-injectables-links-module-AppModule-257a044be9b9491d189bb901d6967613e7dad826e011aece24650905801a7e32936990b0e5c61080b92daa4200714ac185bff0e42c279369291cfe1d7f86a947"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesModule.html" data-type="entity-link" >CountriesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EventsModule.html" data-type="entity-link" >EventsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeedbackModule.html" data-type="entity-link" >FeedbackModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderDetailsModule.html" data-type="entity-link" >OrderDetailsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrderStatusesModule.html" data-type="entity-link" >OrderStatusesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentTypesModule.html" data-type="entity-link" >PaymentTypesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-175ddfe2b6d281c8ee1902a44fc48ddd135f57d28ba47679c4cefe30966ec7bc30c458e89d03e57132885b4b4202ade9c5cc322b1078c5c311fa3e98e6176d52"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-175ddfe2b6d281c8ee1902a44fc48ddd135f57d28ba47679c4cefe30966ec7bc30c458e89d03e57132885b4b4202ade9c5cc322b1078c5c311fa3e98e6176d52"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-175ddfe2b6d281c8ee1902a44fc48ddd135f57d28ba47679c4cefe30966ec7bc30c458e89d03e57132885b4b4202ade9c5cc322b1078c5c311fa3e98e6176d52"' :
                                            'id="xs-controllers-links-module-ProductsModule-175ddfe2b6d281c8ee1902a44fc48ddd135f57d28ba47679c4cefe30966ec7bc30c458e89d03e57132885b4b4202ade9c5cc322b1078c5c311fa3e98e6176d52"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-175ddfe2b6d281c8ee1902a44fc48ddd135f57d28ba47679c4cefe30966ec7bc30c458e89d03e57132885b4b4202ade9c5cc322b1078c5c311fa3e98e6176d52"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-175ddfe2b6d281c8ee1902a44fc48ddd135f57d28ba47679c4cefe30966ec7bc30c458e89d03e57132885b4b4202ade9c5cc322b1078c5c311fa3e98e6176d52"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-175ddfe2b6d281c8ee1902a44fc48ddd135f57d28ba47679c4cefe30966ec7bc30c458e89d03e57132885b4b4202ade9c5cc322b1078c5c311fa3e98e6176d52"' :
                                        'id="xs-injectables-links-module-ProductsModule-175ddfe2b6d281c8ee1902a44fc48ddd135f57d28ba47679c4cefe30966ec7bc30c458e89d03e57132885b4b4202ade9c5cc322b1078c5c311fa3e98e6176d52"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PromotionsModule.html" data-type="entity-link" >PromotionsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionsModule.html" data-type="entity-link" >TransactionsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserTypesModule.html" data-type="entity-link" >UserTypesModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Countries.html" data-type="entity-link" >Countries</a>
                            </li>
                            <li class="link">
                                <a href="classes/Events.html" data-type="entity-link" >Events</a>
                            </li>
                            <li class="link">
                                <a href="classes/Feedback.html" data-type="entity-link" >Feedback</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderDetails.html" data-type="entity-link" >OrderDetails</a>
                            </li>
                            <li class="link">
                                <a href="classes/Orders.html" data-type="entity-link" >Orders</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderStatuses.html" data-type="entity-link" >OrderStatuses</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentTypes.html" data-type="entity-link" >PaymentTypes</a>
                            </li>
                            <li class="link">
                                <a href="classes/Products.html" data-type="entity-link" >Products</a>
                            </li>
                            <li class="link">
                                <a href="classes/Promotions.html" data-type="entity-link" >Promotions</a>
                            </li>
                            <li class="link">
                                <a href="classes/Transactions.html" data-type="entity-link" >Transactions</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link" >Users</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserTypes.html" data-type="entity-link" >UserTypes</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link" >DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});