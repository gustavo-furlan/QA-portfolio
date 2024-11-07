class FormPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = 'input[name="username"]';
      this.passwordInput = 'input[name="password"]';
      this.loginButton = 'button[type="submit"]';
      this.dashboardUrl = 'https://example.com/dashboard';
      this.formPageLink = 'a[href="/form-page"]';
      this.formPageUrl = 'https://example.com/form-page';
      this.nameInput = 'input[name="name"]';
      this.documentInput = 'input[name="document"]';
      this.addressInput = 'input[name="address"]';
      this.saveButton = 'button[type="submit"]';
      this.successMessage = 'Form saved successfully';
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }
  
    async navigateToFormPage() {
      await this.page.click(this.formPageLink);
    }
  
    async fillForm(name, document, address) {
      await this.page.fill(this.nameInput, name);
      await this.page.fill(this.documentInput, document);
      await this.page.fill(this.addressInput, address);
    }
  
    async saveForm() {
      await this.page.click(this.saveButton);
    }
  }
  
  module.exports = { FormPage };