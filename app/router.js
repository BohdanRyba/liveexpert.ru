import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {

  this.route('index', { path: '/' });
  this.route('consultations', function () {
    this.route('consultation', { path: '/:id' });
  });

  this.route('categories', { path: '/:section' }, function () {
    this.route('category', { path: '/:url' }, function () {
      this.route('sub-category', { path: '/:subUrl' }, function () {
        this.route('category-filter', { path: '/:filter' });
      });
    });
  });

  this.route('profile', function () {
    this.route('user-questions');
    this.route('expertconsult');
    this.route('welcome')
  })

  this.route('payment-status', { path: 'payment-status/:id' }, function () { });

  this.route('e', { path: 'e/:login' }, function () {
    this.route('expert-detail', { path: '/' })
    this.route('expert-reviews');
    this.route('expert-answers');
  });

  this.route('settings', function () { });

  this.route('invite', function () { });

  this.route('start-chat', { path: 'expert/start-chat' }, function () {

  });

  this.route('open-chat-with', { path: 'expert/:id/open-chat' }, function () {

  });

  this.route('user-logged', function () {
    this.route('experts', { path: '/experts' }, function () { });
    this.route('questions', { path: '/questions' }, function () { });
  });

  this.route('help', { path: 'help/:page' }, function () { });

  this.route('help-support', { path: 'help/support' }, function () { });

  this.route('question', { path: '/topic/view/:slug' }, function () { });

  this.route('pay', function () { });

  this.route('pay-form', { path: 'account/pay/payment/:sys/:modepay/' }, function () {
  });

  this.route('pricing', { path: '/:id/pricing' }, function () { });

  this.route('test-videochat', { path: 'test-videochat/:typeCall' }, function () { });

  this.route('videochat', { path: 'videochat/:consultationId/:typeCall/:callerId' }, function () { });

  this.route('videochat-tok', { path: 'videochat-tok/:consultationId/:typeCall/:callerId' }, function () { });

});

export default Router;
