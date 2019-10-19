class User {
	constructor(user)
	{
		this.name = user.name;//Nombre del usuario
		this.gold = user.gold;//Monedas Gratis que se consiguen jugando
		this.gems = user.gems;//Monedas de Pago o dificiles de conseguir
		this.exp =  user.exp;
		//this.heros = user.heros //Esta variable guarda todo los heroes de los que dispone el usuario.
		this.heros = user.heros;
		this.clan = user.clan //Se utilizara si finalmente se implementa las facciones.
		this.arenaPoints = user.arenaPoints;
		this.mvol = user.mvol;
		this.evol = user.evol;
		this.lang = user.lang;
		this.numeroExclusivoDeCarta = user.numeroExclusivoDeCarta;
		this.numberofmision = user.numberofmision;
	}
}