/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/brace-style */
import { ITemplateItem } from "@spt-aki/models/eft/common/tables/ITemplateItem";
import { BaseClasses } from "@spt-aki/models/enums/BaseClasses";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";
import { AmmoConfig } from "../config/ts/ammo";

class ValensAmmoOverhaul implements IPostDBLoadMod {
    private logger: ILogger;
    private databaseServer: DatabaseServer;
    private items: Record<string, ITemplateItem>;
    private modConfig: AmmoConfig = require("../config/ammo.json");

    public postDBLoad(container: DependencyContainer): void {
        // Get database from server
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        this.items = this.databaseServer.getTables().templates.items;

        /* Define ammo calibers as a constant.
        const ammoCalibers = ["Ammo1143x23ACP", "Ammo127x108", "Ammo127x55", "Ammo12Gauge", "Ammo20Gauge", "Ammo23x75",
            "Ammo26x75", "Ammo30x29", "Ammo366TKM", "Ammo46x30", "Ammo545x39", "Ammo556x45", "Ammo57x28", "Ammo762x25",
            "Ammo762x39", "Ammo762x51", "Ammo86x70", "Ammo9x18", "Ammo9x19", "Ammo9x21", "Ammo9x33R", "Ammo9x39"];*/

        // Loop through the calibers defined.
        for (const caliber in this.items) {
            if (this.items[caliber]._parent === BaseClasses.AMMO) {
                // Call the processCaliber function, and perform the for loop in the function on the caliber specified.
                this.processCaliber();
            }
        }
    }

    private processCaliber(): void {
        /* Looping through the ammoTypes in the modConfig and applying ArmorDamage, Damage,
        and PenetrationPower mulitpliers per the configured values for each caliber and bullet.*/
        for (const caliber in this.items) {
            for (const ammoType in this.modConfig) {
                if (this.modConfig[ammoType].Enabled) {
                    this.items[caliber]._props.ArmorDamage *= this.modConfig[caliber].ArmorDamage;
                    this.items[caliber]._props.Damage *= this.modConfig[caliber].Damage;
                    this.items[caliber]._props.PenetrationPower *= this.modConfig[caliber].PenetrationPower;
                    this.logger.info(`This is the items.json ammo: ${this.items[caliber]} and this is the modConfig ammoType: ${this.modConfig[ammoType]} 
                    and this is the modConfig ammo: ${this.modConfig[caliber].BulletIDs} and this is the modConfig Enabled state: ${this.modConfig[ammoType].Enabled}`)
                }
            }
        }
    }
}

module.exports = { mod: new ValensAmmoOverhaul() };