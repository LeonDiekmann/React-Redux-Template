import path from 'path';
import resolveAbsoluteImport from 'chayns-components/lib/utils/babel/resolveAbsoluteImport';
import BabelTransformPlugin from 'babel-plugin-transform-imports';

const ROOT_PATH = path.resolve('./');

export default (dev = false) => {
    const config = {
        entry: {
            'example.bundle': [
                path.resolve('src/index')
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        output: {
            path: path.resolve(ROOT_PATH, 'build'),
            filename: `[name].js?${dev ? '' : '[chunkhash]'}`,
            chunkFilename: '[name].chunk.js',
            publicPath: ''
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            [BabelTransformPlugin, {
                                'chayns-components': {
                                    transform: resolveAbsoluteImport,
                                    preventFullImport: true
                                }
                            }],
                            ['date-fns']
                        ]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: !dev
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
            ]
        },
    };
    return config;
};
