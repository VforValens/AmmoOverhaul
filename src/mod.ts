import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";

class ValensAmmoOverhaul implements IPostDBLoadMod
{
    private logger: ILogger;
    private databaseServer: DatabaseServer;

    public postDBLoad(container: DependencyContainer): void
    {
        // get database from server
        const logger = container.resolve<ILogger>("WinstonLogger");
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        
        // Defining database server to a constant.
        const items = this.databaseServer.getTables().templates.items;


        // Defining ammo types to a constant for multiplier purposes to be used in calculating ArmorDamage, Damage, and PenetrationPower in the loops below.
        const pm9x18 = 1.0715;
        const pm9x19 = 1.0715;
        
        
        // 9x18mm PM Ammo Adjustments
        for (const item in items)
        {
            if (items[item]._name.startsWith("patron_9x18pm"))
            {
                
                
                items[item]._props.ArmorDamage *= pm9x18;
                items[item]._props.Damage *= pm9x18;
                items[item]._props.PenetrationPower *= pm9x18;
            }
        }
        

        // 9x19mm Parabellum Ammo Adjustments
        for (const item in items)
        {
            if (items[item]._name.startsWith("patron_9x18pm"))
            {
                
                
                items[item]._props.ArmorDamage *= pm9x18;
                items[item]._props.Damage *= pm9x18;
                items[item]._props.PenetrationPower *= pm9x18;
            }
        }
    }
}
    
module.exports = { mod: new ValensAmmoOverhaul() }