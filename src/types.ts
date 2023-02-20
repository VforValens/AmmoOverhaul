

type BulletValues = {
    BulletIDs: Array<string>,
    ArmorDamage: number;
    Damage: number;
    PenetrationPower: number;
}

class Types {
    public static readonly values: Array<BulletValues> =
        [
            {
                BulletIDs: Object.values(Ammo86x70),
                ArmorDamage: 5,
                Damage: 5,
                PenetrationPower: 5
            },
            {
                BulletIDs: Object.values(Ammo127x55),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo762x54),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
            {
                BulletIDs: Object.values(Ammo9x39),
                ArmorDamage: 51,
                Damage: 51,
                PenetrationPower: 51
            },
        ];
}


for (const bulletValues of Types.values) {
    for (const id of bulletValues.BulletIDs) {
        items[id]._props.ArmorDamage *= bulletValues.ArmorDamage;
        items[id]._props.Damage *= bulletValues.Damage;
        items[id]._props.PenetrationPower *= bulletValues.PenetrationPower;
    }
}
}