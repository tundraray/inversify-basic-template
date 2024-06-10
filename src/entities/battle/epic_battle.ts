import { inject, injectable, named } from "inversify";

import { Battle, Warrior } from "../../interfaces";
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import TAG from "../../constants/tags";

@injectable()
export class EpicBattle implements Battle {
     constructor(
        @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.CHINESE) warrior1: Warrior,
        @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.JAPANESE) warrior2: Warrior,
    )
    {
        this.warrior1 = warrior1;
        this.warrior2 = warrior2;
    }
    public warrior1: Warrior;
    public warrior2: Warrior;

    public fight() {
        let desc = `FIGHT!
                ${this.warrior1.name} (${this.warrior1.weapon.name})
                vs
                ${this.warrior2.name} (${this.warrior2.weapon.name})`;
        return desc;
    }

}
