export interface AmmoConfig {
    enabled: boolean;
    rifles: Rifles;
    pistol: Pistol;
    shotguns: Shotguns;
}

export interface Rifles {
    armorDamage: ArmorDamage;
    damage: Damage;
    penetration: Penetration;
}

export interface Pistol {
    armorDamage: ArmorDamage;
    damage: Damage;
    penetration: Penetration;
}

export interface Shotguns {
    armorDamage: ArmorDamage;
    damage: Damage;
    penetration: Penetration;
}

export interface ArmorDamage {
    pm9x18: number;
    mm127x55: number;
    gauge12: number;
}

export interface Damage {
    pm9x18: number;
    mm127x55: number;
    gauge12: number;
}

export interface Penetration {
    pm9x18: number;
    mm127x55: number;
    gauge12: number;
}