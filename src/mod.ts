import { Ammo127x55, Ammo12Gauge, Ammo9x18 } from "@spt-aki/models/enums/AmmoTypes";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";
import { AmmoConfig } from "../config/ts/ammo";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ValensAmmoOverhaul implements IPostDBLoadMod {
    private logger: ILogger;
    private databaseServer: DatabaseServer;
    private modConfig: AmmoConfig = require("../config/ammoConfig.json")
    private ammoSettings = require("../config/ammo.json");


    public postDBLoad(container: DependencyContainer): void {
        // get database from server
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        // Defining database server to a constant.
        const items = this.databaseServer.getTables().templates.items;

        const mm127x55armorDamage = 1;
        const mm127x55damage = 1;
        const mm127x55penetration = 1;

        const mm9x18armorDamage = 1;
        const mm9x18damage = 1;
        const mm9x18penetration = 1;

        const gauge12armorDamage = 1;
        const gauge12damage = 1;
        const gauge12penetration = 1;

        if (this.modConfig.enabled) {
            for (const value of Object.values(Ammo127x55)) {
                items[value]._props.ArmorDamage *= this.modConfig.rifles.armorDamage.mm127x55;
                items[value]._props.Damage *= this.modConfig.rifles.damage.mm127x55;
                items[value]._props.PenetrationPower *= this.modConfig.rifles.penetration.mm127x55;
            }
            for (const value of Object.values(Ammo9x18)) {
                items[value]._props.ArmorDamage *= this.modConfig.pistol.armorDamage.pm9x18;
                items[value]._props.Damage *= this.modConfig.pistol.damage.pm9x18;
                items[value]._props.PenetrationPower *= this.modConfig.pistol.penetration.pm9x18;
            }
            for (const value of Object.values(Ammo12Gauge)) {
                items[value]._props.ArmorDamage *= this.modConfig.shotguns.armorDamage.gauge12;
                items[value]._props.Damage *= this.modConfig.shotguns.damage.gauge12;
                items[value]._props.PenetrationPower *= this.modConfig.shotguns.penetration.gauge12;
            }
        }
        else {
            for (const value of Object.values(Ammo127x55)) {
                items[value]._props.ArmorDamage *= mm127x55armorDamage;
                items[value]._props.Damage *= mm127x55damage;
                items[value]._props.PenetrationPower *= mm127x55penetration;
            }
            for (const value of Object.values(Ammo9x18)) {
                items[value]._props.ArmorDamage *= mm9x18armorDamage;
                items[value]._props.Damage *= mm9x18damage;
                items[value]._props.PenetrationPower *= mm9x18penetration;
            }
            for (const value of Object.values(Ammo12Gauge)) {
                items[value]._props.ArmorDamage *= gauge12armorDamage;
                items[value]._props.Damage *= gauge12damage;
                items[value]._props.PenetrationPower *= gauge12penetration;
            }
        }
        module.exports = { mod: new ValensAmmoOverhaul() }
    }
}