OMG_Tank.Tank_Init(Tank_version.V3)
OMG_Tank.Stop_Motors()
basic.forever(function () {
    OMG_Tank.Set_Speed(100, -100)
})
