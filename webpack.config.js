const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
    
    let mod = env.NODE_ENV;
    let plugins = []
    console.log(mod)

     if(mod === 'production'){
         plugins = [
             new MiniCssExtractPlugin({
                 filename: 'css/[name].css'
             }) 
         ]
     }
    
       return{ 
        mode: mod,
        entry:{
            index: path.resolve(__dirname, './src/index.js')
        },
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js' 
        },
        devServer:{
            port: 9000
        },
        module:{
            rules:[
                // Js Loader
                {
                   test: /\.(js|jsx)$/,
                   exclude: /(node_modules)/,
                   use:{
                       loader: 'babel-loader',
                       options:{
                           presets: ['@babel/preset-env', '@babel/preset-react'],
                           plugins: ['@babel/plugin-proposal-class-properties','@babel/plugin-transform-runtime']
                       }
                   } 
                },
               //sass loader
               {
                   test: /\.scss$/,
                   use:[
                        mod == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,'css-loader','sass-loader'
                   ]
               },
               //url loader
               {
                   test:  /\.(jpg|jpeg|gif|png)$/,
                   use:{
                       loader: 'url-loader'
                   }
               }
            ]
        },
        plugins
    }
}