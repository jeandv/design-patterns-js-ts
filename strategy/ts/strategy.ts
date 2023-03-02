interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {

  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }

}

class LoginDBStrategy implements Strategy {

  login(user: string, password: string) {

    console.log('llamamos base de datos');

    if (user === 'admin' && password === '123') {

      console.log('estas logueado');
      return true;

    }

    console.log('error al loguearte!');

    return false;

  }

}

class LoginServiceStrategy implements Strategy {

  login(user: string, password: string) {

    console.log('Bienvenido al login de servicios de auth');

    if (user === 'jean' && password === '222') {

      console.log('estas logueado');
      return true;

    }

    console.log('error al loguearte!');

    return false;

  }

}

const auth = new LoginContext(new LoginDBStrategy());

auth.login('admin', '123');

auth.setStrategy(new LoginServiceStrategy());

auth.login('jean', '222');