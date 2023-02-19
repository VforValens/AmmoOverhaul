import { AmmoConfig } from "../config/ts/ammo";

export type BulletValues = {
    ArmorDamage: number;
    Damage: number;
    PenetrationPower: number;
}

export class Types {
    private modConfig: AmmoConfig = require("../config/ammo.json");
    public static readonly values: Record<any, BulletValues> =
        {
            Ammo762x51: {
                ArmorDamage: 5,
                Damage: 5,
                PenetrationPower: 5
            },
            Ammo762x54: {
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            // .... etc
        };
}

for (const [k, v] of Object.entries(Types.values)) {
    for (const value of Object.values(k)) {
        items[value]._props.ArmorDamage *= v.ArmorDamage;
        items[value]._props.Damage *= v.Damage;
        items[value]._props.PenetrationPower *= v.PenetrationPower;
    }



    // public static readonly field4: number = 1;
    // public static field1 = 1;

    // Defining ammo types to a constant for multiplier purposes to be used in calculating ArmorDamage, Damage, and PenetrationPower in the Mod Config.
    // Start Pistol Calibers
    // 9x18mm PM
    public pm9x18Armor = this.modConfig.;
    public pm9x18Damage = ;
    public pm9x18Pen = ;



    // Defining ammo types to a constant for multiplier purposes to be used in calculating ArmorDamage, Damage, and PenetrationPower by default, when not configured.
    // Start Pistol Calibers
    // 9x18mm PM
    pm9x18Armor = 1.25;
    pm9x18Damage = 1.25;
    pm9x18Pen = 1.25;

    // 9x19mm Parabellum
    mm9x19Armor = 1.25;
    mm9x19Damage = 1.25;
    mm9x19Pen = 1.25;

    // 9x21mm Gyurza
    mm9x21Armor = 1.25;
    mm9x21Damage = 1.25;
    mm9x21Pen = 1.25;

    // 7.62x25mm Tokarev
    mm762x25Armor = 1.25;
    mm762x25Damage = 1.25;
    mm76x25Pen = 1.25;

    // 5.7x28mm FN


    // 4.6x30mm HK


    // .45 ACP (1143x23ACP)


    // .357 Magnum (933R)


    // Start Shotgun Shells
    // 12 Gauge

    // 20 Gauge


    // Start Rifle Calibers
    // .338 Lapua Magnum (86x70)
    // 12.7x55mm STs-130


    // 9x39mm

    // 7.62x54mmR

    // 7.62x51mm NATO

    // 7.62x39mm

    // 7.62x35mm (.300 BLK)

    // 5.56x45mm NATO

    // 5.45x39mm

    // .366 TKM
}
}