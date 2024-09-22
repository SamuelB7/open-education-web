import { ChevronRight, School } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Link as MuiLink,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <MuiLink href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <School sx={{ mr: 1 }} />
              <Typography variant="h6" color="inherit" noWrap>
                OpenEducation
              </Typography>
            </MuiLink>
            <Box sx={{ flexGrow: 1 }} />
            <nav>
              {['Home', 'Login', 'Sobre', 'Contato'].map((item) => (
                <Link to={`/${item}`.toLocaleLowerCase()} key={item} >
                  <MuiLink variant="button" color="text.primary" sx={{ my: 1, mx: 1.5 }}>
                    {item}
                  </MuiLink>
                </Link>
              ))}
            </nav>
          </Toolbar>
        </AppBar>

        <main style={{ flexGrow: 1 }}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                O melhor conteúdo a qualquer hora
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Desbloqueie seu potencial com nossa plataforma de aprendizado on-line de ponta. Acesse cursos e conteúdos gratuitos feitos por professores qualificados.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" sx={{ mr: 2 }}>Comece aqui</Button>
                <Button variant="outlined">Saiba mais</Button>
              </Box>
            </Container>
          </Box>

          {/* <Container sx={{ py: 8 }} maxWidth="md">
            <Typography component="h2" variant="h3" align="center" color="text.primary" gutterBottom>
              Why Choose Us
            </Typography>
            <Grid container spacing={4}>
              {[
                { icon: <Book />, title: 'Extensive Library', description: 'Access thousands of courses across various subjects.' },
                { icon: <People />, title: 'Expert Instructors', description: 'Learn from industry professionals and academics.' },
                { icon: <EmojiEvents />, title: 'Recognized Certificates', description: 'Earn certificates valued by top employers worldwide.' },
              ].map((feature, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        {React.cloneElement(feature.icon, { fontSize: 'large', color: 'primary' })}
                      </Box>
                      <Typography gutterBottom variant="h5" component="h3" align="center">
                        {feature.title}
                      </Typography>
                      <Typography align="center" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container> */}

          {/* <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
            <Container maxWidth="md">
              <Typography component="h2" variant="h3" align="center" color="text.primary" gutterBottom>
                What Our Students Say
              </Typography>
              <Grid container spacing={4}>
                {[1, 2, 3].map((i) => (
                  <Grid item key={i} xs={12} sm={6} md={4}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                          <Box
                            component="img"
                            src={`/placeholder.svg?height=80&width=80`}
                            alt={`Student ${i}`}
                            sx={{ width: 80, height: 80, borderRadius: '50%' }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary" align="center" paragraph>
                          "This platform has transformed my learning experience. The courses are engaging and the instructors are top-notch!"
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                          Student {i}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box> */}

          <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
            <Container maxWidth="sm">
              <Typography component="h2" variant="h3" align="center" color="text.primary" gutterBottom>
                Comece sua jornada de aprendizagem hoje
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Junte-se a comunidade de alunos que já se beneficiam de nossa plataforma. Cadastre-se agora e tenha acesso aos conteúdos da plataforma.              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Endereço de email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ height: '100%' }}
                      endIcon={<ChevronRight />}
                    >
                      Cadastre-se
                    </Button>
                  </Grid>
                </Grid>
                <Typography variant="caption" color="text.secondary" align="center" sx={{ mt: 2, display: 'block' }}>
                  Ao fazer o cadastro, você concorda com os nossos{' '}
                  <Link to='/'>
                    <MuiLink>Termos e Condições</MuiLink>
                  </Link>
                </Typography>
              </Box>
            </Container>
          </Box>
        </main>

        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              © 2023 OpenEducation. Todos os direitos reservados.
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              <Link to='/'>
                <MuiLink color="inherit" sx={{ mr: 2 }}>Terms of Service</MuiLink>
              </Link>
              <Link to='/'>
                <MuiLink color="inherit">Privacy</MuiLink>
              </Link>
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}