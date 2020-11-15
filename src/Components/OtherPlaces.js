import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/**
 * Component
 * propriedade
 * Estado & Imutabilidade
 */

const useStyles = makeStyles({
    root: {
        width: 390,
        marginTop: 15,
        float: 'left',
        marginLeft: 40,
        marginRight: 15
    },

    media: {
        height: 140,

    },
});
//useState retorna um array com 2 posições
//Na primeira posição ele vai retornar a variavel com seu valor inicial 
//o segundo parametro é uma função para atualizar o valor


const MediaCard = (props) => {


    const { img, titulo, descricao, name1 } = props
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={titulo}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descricao}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}
export default MediaCard