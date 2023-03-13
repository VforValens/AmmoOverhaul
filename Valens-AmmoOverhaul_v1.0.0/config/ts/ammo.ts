
export interface AmmoConfig {
    Ammo86x70: IAmmoType;
    Ammo762x54: IAmmoType;
    Ammo762x51: IAmmoType;
    Ammo46x30: IAmmoType;
    Ammo57x28: IAmmoType;
    Ammo762x25: IAmmoType;
    Ammo9x18: IAmmoType;
    Ammo9x19: IAmmoType;
    Ammo9x21: IAmmoType;
    Ammo9x33R: IAmmoType;
    Ammo1143x23ACP: IAmmoType;
    Ammo545x39: IAmmoType;
    Ammo556x45: IAmmoType;
    Ammo762x35: IAmmoType;
    Ammo76x239: IAmmoType;
    Ammo9x39: IAmmoType;
    Ammo366TKM: IAmmoType;
    Ammo127x55: IAmmoType;
    Ammo12Gauge: IAmmoType;
    Ammo20Gauge: IAmmoType;
    Ammo23x75: IAmmoType;
    Ammo127x108: IAmmoType;
}

export interface IAmmoType {
    Enabled: boolean;
    BulletIDs: string[];
    ArmorDamage: number;
    Damage: number;
    PenetrationPower: number;
}