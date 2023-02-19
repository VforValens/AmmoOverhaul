import { Ammo1143x23ACP, Ammo127x55, Ammo12Gauge, Ammo20Gauge, Ammo366TKM, Ammo46x30, Ammo545x39, Ammo556x45, Ammo57x28, Ammo762x25, Ammo762x35, Ammo762x39, Ammo762x51, Ammo762x54, Ammo86x70, Ammo9x18, Ammo9x19, Ammo9x21, Ammo9x33R, Ammo9x39 } from "@spt-aki/models/enums/AmmoTypes";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";
import { AmmoConfig } from "../config/ts/ammo";
import { Types } from "./types";

class ValensAmmoOverhaul implements IPostDBLoadMod {
    private logger: ILogger;
    private databaseServer: DatabaseServer;
    private modConfig: AmmoConfig = require("../config/ammo.json")


    public postDBLoad(container: DependencyContainer): void {
        // get database from server
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        const types = new Types;

        // Defining database server to a constant.
        const items = this.databaseServer.getTables().templates.items;
        let x = types.pm9x18Armor;

        if (this.modConfig.enabled) {
            // Start Pistol Caliber Adjustments 
            // 9x18mm PM Ammo Adjustments
            for (const value of Object.values(Ammo9x18)) {
                items[value]._props.ArmorDamage *= Types.pm9x18Armor;
                items[value]._props.Damage *= Types.field2;
                items[value]._props.PenetrationPower *= Types.field3;
            }


            // 9x19mm Parabellum Ammo Adjustments
            for (const value of Object.values(Ammo9x19)) {
                items[value]._props.ArmorDamage *= this.modConfig.rifles.mm127x55;
                items[value]._props.Damage *= ;
                items[value]._props.PenetrationPower *= ;
            }


            // 9x21mm Gyurza Ammo Adjustments
            for (const value of Object.values(Ammo9x21)) {
                items[value]._props.ArmorDamage *= ;
                items[value]._props.Damage *= ;
                items[value]._props.PenetrationPower *= ;
            }


            // 7.62x25mm Tokarev Ammo Adjustments
            for (const value of Object.values(Ammo762x25)) {
                items[value]._props.ArmorDamage *= ;
                items[value]._props.Damage *= ;
                items[value]._props.PenetrationPower *= ;
            }


            // 5.7x28mm FN Ammo Adjustments
            for (const value of Object.values(Ammo57x28)) {
                items[value]._props.ArmorDamage *= ;
                items[value]._props.Damage *= ;
                items[value]._props.PenetrationPower *= ;
            }


            // 4.6x30mm HK Ammo Adjustments
            for (const value of Object.values(Ammo46x30)) {
                items[value]._props.ArmorDamage *= ;
                items[value]._props.Damage *= ;
                items[value]._props.PenetrationPower *= ;
            }


            // .45 ACP (1143x23ACP) Ammo Adjustments
            for (const value of Object.values(Ammo1143x23ACP)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *= ;
                items[value]._props.PenetrationPower *=  ;
            }


            // .357 Magnum (9x33R) Ammo Adjustments
            for (const value of Object.values(Ammo9x33R)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // .357 Magnum (9x33R) Ammo Adjustments
            for (const value of Object.values(Ammo9x33R)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // Start Shotgun Ammo Adjustments
            // 12 Gauge Shell Adjustments
            for (const value of Object.values(Ammo12Gauge)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 20 Gauge Shell Adjustments
            for (const value of Object.values(Ammo20Gauge)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // Start Rifle Ammo Adjustments
            // .338 Lapua Magnum (86x70) Ammo Adjustments
            for (const value of Object.values(Ammo86x70)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 12.7x55mm STs-130 Ammo Adjustments
            for (const value of Object.values(Ammo127x55)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 9x39mm Ammo Adjustments
            for (const value of Object.values(Ammo9x39)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x54mmR Ammo Adjustments
            for (const value of Object.values(Ammo762x54)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x51mm NATO Ammo Adjustments
            for (const value of Object.values(Ammo762x51)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x39mm Ammo Adjustments
            for (const value of Object.values(Ammo762x39)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x35mm (.300 BLK) Ammo Adjustments
            for (const value of Object.values(Ammo762x35)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 5.56x45mm NATO Ammo Adjustments
            for (const value of Object.values(Ammo556x45)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 5.545x39mm Ammo Adjustments
            for (const value of Object.values(Ammo545x39)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // .366 TKM Ammo Adjustments
            for (const value of Object.values(Ammo366TKM)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }

        }

        else {
            // Start Pistol Caliber Adjustments 
            // 9x18mm PM Ammo Adjustments
            for (const value of Object.values(Ammo9x18)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 9x19mm Parabellum Ammo Adjustments
            for (const value of Object.values(Ammo9x19)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 9x21mm Gyurza Ammo Adjustments
            for (const value of Object.values(Ammo9x21)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x25mm Tokarev Ammo Adjustments
            for (const value of Object.values(Ammo762x25)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 5.7x28mm FN Ammo Adjustments
            for (const value of Object.values(Ammo57x28)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 4.6x30mm HK Ammo Adjustments
            for (const value of Object.values(Ammo46x30)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // .45 ACP (1143x23ACP) Ammo Adjustments
            for (const value of Object.values(Ammo1143x23ACP)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // .357 Magnum (9x33R) Ammo Adjustments
            for (const value of Object.values(Ammo9x33R)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // .357 Magnum (9x33R) Ammo Adjustments
            for (const value of Object.values(Ammo9x33R)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // Start Shotgun Ammo Adjustments
            // 12 Gauge Shell Adjustments
            for (const value of Object.values(Ammo12Gauge)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 20 Gauge Shell Adjustments
            for (const value of Object.values(Ammo20Gauge)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // Start Rifle Ammo Adjustments
            // .338 Lapua Magnum (86x70) Ammo Adjustments
            for (const value of Object.values(Ammo86x70)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 12.7x55mm STs-130 Ammo Adjustments
            for (const value of Object.values(Ammo127x55)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 9x39mm Ammo Adjustments
            for (const value of Object.values(Ammo9x39)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x54mmR Ammo Adjustments
            for (const value of Object.values(Ammo762x54)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x51mm NATO Ammo Adjustments
            for (const value of Object.values(Ammo762x51)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x39mm Ammo Adjustments
            for (const value of Object.values(Ammo762x39)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 7.62x35mm (.300 BLK) Ammo Adjustments
            for (const value of Object.values(Ammo762x35)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 5.56x45mm NATO Ammo Adjustments
            for (const value of Object.values(Ammo556x45)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // 5.545x39mm Ammo Adjustments
            for (const value of Object.values(Ammo545x39)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }


            // .366 TKM Ammo Adjustments
            for (const value of Object.values(Ammo366TKM)) {
                items[value]._props.ArmorDamage *=  ;
                items[value]._props.Damage *=  ;
                items[value]._props.PenetrationPower *=  ;
            }
        }
    }
}

module.exports = { mod: new ValensAmmoOverhaul() }