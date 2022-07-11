"use strict";
class Courant {
    constructor(numero, titulaire, solde = 0, ligneDeCredit = 0) {
        this.numero = numero;
        this.titulaire = titulaire;
        this.ligneDeCredit = ligneDeCredit;
        if (isNaN(solde))
            throw new TypeError(`Le solde doit être un type number qui n'est pas NaN.`);
        if (solde < -ligneDeCredit)
            throw new Error(`Le solde doit être supérieur à -${ligneDeCredit} : ${solde}`);
        this._solde = solde;
    }
    get solde() {
        return this._solde;
    }
    get ligneDeCredit() {
        return this._ligneDeCredit;
    }
    set ligneDeCredit(value) {
        if (isNaN(value))
            throw new TypeError(`La ligne de crédit doit être un type number qui n'est pas NaN.`);
        if (value < 0)
            throw new Error(`La ligne de crédit doit être toujours positive : ${value}`);
        this._ligneDeCredit = value;
    }
    get titulaire() {
        return this._titulaire;
    }
    set titulaire(value) {
        if (value.constructor !== Personne.prototype.constructor)
            throw new TypeError(`Le titulaire n'est pas de type Personne.`);
        this._titulaire = value;
    }
    depot(montant) {
        if (isNaN(montant))
            throw new TypeError(`Le montant doit être un type number qui n'est pas NaN.`);
        if (montant <= 0)
            throw new Error(`Le montant doit être supérieur à 0 : ${montant}`);
        this._solde += montant;
    }
    retrait(montant) {
        if (isNaN(montant))
            throw new TypeError(`Le montant doit être un type number qui n'est pas NaN.`);
        if (montant <= 0)
            throw new Error(`Le montant doit être supérieur à 0 : ${montant}`);
        if (this._solde - montant < -this._ligneDeCredit)
            throw new Error(`Le montant est trop élevé pour la ligne de crédit ${this._ligneDeCredit} : ${montant}`);
        this._solde -= montant;
    }
}
