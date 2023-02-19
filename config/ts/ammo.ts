export interface AmmoConfig {
    enabled: boolean;
    rifles: Rifles;
    pistol: Pistol;
    shotguns: Shotguns;
}

export interface Rifles {
    mm127x55: number;
}

export interface Pistol {
    mm9x18: number;
}

export interface Shotguns {
    mm12x70: number;
}