import { BattleSimulator } from './battle-simulator';
export function BattleSimulatorTest() {
    const bsim = new BattleSimulator();
    const logs: BattleSimulator.BattleLog[] = [];

    // 環境
    {
        const setupDisplay = new BattleSimulator.BattleLog();
        const setupChr1 = new BattleSimulator.BattleLog();
        const setupChr2 = new BattleSimulator.BattleLog();

    }

    // 行動
    {

    }

    bsim.setup(logs);
}