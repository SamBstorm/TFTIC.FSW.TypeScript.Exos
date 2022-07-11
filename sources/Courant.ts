class Courant {

    public numero : string;
    private _solde : number;
    private _ligneDeCredit! : number;
    private _titulaire! : Personne;

    public get solde() : number {
        return this._solde;
    }

    public get ligneDeCredit() : number {
        return this._ligneDeCredit;
    }

    public set ligneDeCredit(value : number) {
        if(isNaN(value)) throw new TypeError(`La ligne de crédit doit être un type number qui n'est pas NaN.`);
        if(value < 0) throw new Error(`La ligne de crédit doit être toujours positive : ${value}`);
        this._ligneDeCredit = value;
    }

    
    public get titulaire() : Personne {
        return this._titulaire;
    }

    public set titulaire(value : Personne) {
        if(value.constructor !== Personne.prototype.constructor) throw new TypeError(`Le titulaire n'est pas de type Personne.`);
        this._titulaire = value;
    }


    constructor(numero : string, titulaire : Personne, solde : number = 0, ligneDeCredit : number = 0) {
        this.numero = numero;
        this.titulaire = titulaire;
        this.ligneDeCredit = ligneDeCredit;
        if(isNaN(solde)) throw new TypeError(`Le solde doit être un type number qui n'est pas NaN.`);
        if(solde < -ligneDeCredit) throw new Error(`Le solde doit être supérieur à -${ligneDeCredit} : ${solde}`);
        this._solde = solde;
    }

    public depot(montant : number) : void{
        if(isNaN(montant)) throw new TypeError(`Le montant doit être un type number qui n'est pas NaN.`);
        if(montant <= 0) throw new Error(`Le montant doit être supérieur à 0 : ${montant}`);
        this._solde += montant;
    }

    public retrait(montant : number){
        if(isNaN(montant)) throw new TypeError(`Le montant doit être un type number qui n'est pas NaN.`);
        if(montant <= 0) throw new Error(`Le montant doit être supérieur à 0 : ${montant}`);
        if(this._solde-montant < -this._ligneDeCredit) throw new Error(`Le montant est trop élevé pour la ligne de crédit ${this._ligneDeCredit} : ${montant}`);
        this._solde -= montant;
    }
}