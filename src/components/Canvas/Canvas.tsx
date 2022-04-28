import style from './Canvas.module.scss'
import {useEffect, useRef} from "react";

export const Canvas = () => {
    const ref = useRef<HTMLCanvasElement | null>(null)
    useEffect(() => {
        const canvas = ref.current
        if (canvas) {
            let ctx = canvas.getContext('2d');
            canvas.width = 800
            canvas.height = 600
            //квадрат
            if (ctx) {
                let heightSq = 240
                ctx.fillRect(50, 20, heightSq, heightSq)
                ctx.fillStyle = '#d03b3b'

                //прямоугольник
                ctx.fillRect(440, 330, 220 + 100, 220)
                ctx.fillStyle = '#d03b3b'

            //треугольник
                ctx.fillStyle = '#4fff5e';
                ctx.strokeStyle = '#080808';
                ctx.lineWidth = 1;

                //Верхний треугольник
                //Первая линия
                ctx.moveTo(600, 20);
                ctx.lineTo(450, 250);

                //Вторая линия
                ctx.moveTo(450, 250);
                ctx.lineTo(750, 250);

                // //Третья линия
                ctx.moveTo(750, 250);
                ctx.lineTo(600, 20)

                ctx.stroke();
                ctx.fillStyle = '#4fff5e';

                // ctx.fill();
                ctx.closePath();
                ctx.beginPath();

            //круг
                ctx.arc(170, 450, 120, 0, 2 * Math.PI)
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.stroke();
            }
        }
    })
    return (
        <canvas ref={ref} className={style.canvasContainer} id="canvas"/>
    )
}