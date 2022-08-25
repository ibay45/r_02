maqueen.IR_callbackUser(function (message) {
    IR = message
    if (IR == 17) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    }
    if (IR == 20) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (IR == 22) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (IR == 25) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
    }
    if (IR == 12) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (IR == 10) {
        if (angle > 10) {
            maqueen.servoRun(maqueen.Servos.S1, angle)
            angle += -1
            basic.pause(100)
        }
    }
    if (IR == 8) {
        if (angle < 170) {
            maqueen.servoRun(maqueen.Servos.S1, angle)
            angle += 1
            basic.pause(100)
        }
    }
})
let IR = 0
let angle = 0
angle = 90
maqueen.servoRun(maqueen.Servos.S1, angle)
