class User {
	construtor(user)
	{
		this.ID = user.ID //Identificador único
		this.name = user.name;//Nombre del usuario
		this.gold = user.gold;//Monedas Gratis que se consiguen jugando
		this.gems = user.gems;//Monedas de Pago o dificiles de conseguir
		this.exp =  user.exp;
		this.allTeam = user.allTeam //Esta variable guarda todo los heroes de los que dispone el usuario.
		this.clan = user.clan //Se utilizara si finalmente se implementa las facciones.
		this.arenaTickets = user.arenaTickets; //Tickets Disponibles para jugar la arena
		this.arenaPoints = user.arenaPoints;
		this.config = user.config //Configuracion
	}
}